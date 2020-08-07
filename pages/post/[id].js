import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from 'axios'

export default function Post() {

    const router = useRouter()
    const { id } = router?.query

    const [data, setData] = useState()

    useEffect(() => {
        if (id)
            axios({
                method: 'get',
                url: `http://localhost:3000/api/${id}`
            })
                .then(res => {
                    setData(res.data)
                })
                .catch(err => {
                    console.log("ERROR: ", err)
                });
    }, [id])

    if (data)
        return (
            <div>
                <Head>
                    <title>Post</title>
                </Head>

                <main>
                    <h1>POST</h1>
                    <p>ID: {id}</p>
                    <p>DATA: {JSON.stringify(data)}</p>
                    <h1>{data.title}</h1>
                    {
                        data.list.map((item, i) => {
                            return <article key={i} style={{ margin: 16, borderRadius: 16, boxShadow: "0 2px 2px #0000001a", padding: 16 }}>
                                <p>titulo: {item.title}</p>
                                <p>{item.description}</p>
                            </article>
                        })
                    }
                </main>

            </div>
        )

    else
        return <> CAARGANDO... </>
}
