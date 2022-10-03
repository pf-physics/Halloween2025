import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, get} from "firebase/database";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setIndex } from '../store/indexSlice';

// https://firebase.google.com/docs/database/web/read-and-write
// https://firebase.google.com/docs/app-check/web/recaptcha-provider

// This component should wrap the rest of the app
const CodeHandler = () => {
    const [loading, setLoading] = useState(true)
    const [code, setCode] = useState("") // need to store also?
    const index = useAppSelector((state) => state.index.value)
    const dispatch = useAppDispatch()
    const [codeValid, setCodeValid] = useState(false)
    const db = getDatabase();

    const trySetCode = async (code: string) => {
        setLoading(true)
        const res = (await get(ref(db, code))).val()

        if (res) {
            setCode(code)
            setCodeValid(true)
            const team = (localStorage.getItem("team") as string)

            // DCDCDC kind of hardcoded
            if (team === "pumpkins" || team === "skeletons") {

                getData()
            } else {
                setLoading(false)
            }
        } else {
            // code invalid err
            setLoading(false)
            return false
        }
    }

    const tempGetData = async () => {
        await new Promise(f => setTimeout(f, 1000));
        getData()
    }

    useEffect(() => {
        const key = (localStorage.getItem("code") as string)
        if (!key) {
            setLoading(false)
        } else {
            trySetCode(key)
        }
    },[])

    const getData = async () => {
        const team = (localStorage.getItem("team") as string)
        const dbCode = (localStorage.getItem("code") as string)
        const q = ref(db, dbCode + "/" + team + "/index");

        onValue(q, async (snapshot) => {
          setLoading(false)
          const data = await snapshot.val();
          if (typeof(data) === "number") {
            dispatch(setIndex(data))
          } else {
            // err
          }
          setLoading(false)
        });
    }

    const writeData = () => {
        const team = (localStorage.getItem("team") as string)
        if (!team) {
            return
        }

        if (!index) {
            getData()
            return
        }
        const db = getDatabase();
        const a = ref(db, code + "/" + team + "/index");
        set(a, index+1);
    }

    return <div>
        {index}
        {loading && <div>is loading</div>}
        <button onClick={writeData}>
            Increment
        </button>
    </div>
}

export default CodeHandler;
