import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'


export default function Body() {
    const [num, setNum] = useState(0)
    const [marks, setMarks] = useState(0)
    const [next, setNext] = useState(1)
    const [result, setResult] = useState(false)
    const state = useSelector((state) => state)
    console.log(state)
    const [questions, setQuestions] = useState(
        state.questions
    )

    const handleClick = (sor) => {
        // let a=e.target.value
        // console.log(a)
        setNext(next + 1)
        if (next === questions.length) {
            setResult(true)
        }
        let a = questions[num].correctAns
        // console.log(questions[num].ans.indexOf(a))
        // if (questions[num].correctAns===)
        let cor = questions[num].ans.indexOf(a)
        if (cor === sor) {
            // alert("correct")
            let newMarks = marks + 1;
            setMarks(newMarks)
        }
        let no = num + 1;
        setNum(no)

    }
    let myStyle = {
        border: '2px solid black',
        backgroundColor: 'beige'

    }
    return (
        <div className="container my-5 p-5" style={myStyle}>
            {
                result ? <>
                    <h1>You scored {marks} marks</h1> </> :

                    (<>
                        <h3>Q{num + 1}) &nbsp;&nbsp;&nbsp;
                            {questions[num].question}
                        </h3>
                        <div className="container my-5 p-3" style={myStyle}>
                            <div className="row">
                                {
                                    questions[num].ans.map((e, i) => {
                                        return (
                                            <div className="col-md-6" >
                                                <Button key={i} onClick={() => handleClick(i)} variant="contained" style={{ width: '400px', margin: '20px' }}>
                                                    {e}</Button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>)
            }
            {
                result ? <button className="btn btn-secondary" onClick={() => {
                    window.location.reload()
                }}> Start Again</button> : ""
            }
        </div >
    )
}
