import { useRouter } from "next/router"
import { Fragment } from "react"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Head from 'next/head'

//ourdomain.com/new-meetup


const newMeetup = () => {

    const router = useRouter()

    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)

        router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>Add a meetup </title>
                <meta name="description" content="Create a new meetup site for free" />
            </Head>
            <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
        </Fragment>
    
    )
}

export default newMeetup