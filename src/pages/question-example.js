// pages/posts.js
import React, {useEffect, useRef, useState} from 'react';

export default function QuestionExample({posts}) {
    const [questions, setQuestions] = useState([]);
    const [activeQuestionId, setActiveQuestionId] = useState(0);
    const [showId, setShowId] = useState(0);
    const [finished, setFinished] = useState(false)
    const radioRefs = useRef([]);
    const [startExample, setStartExample] = useState(false);
    const [allowAnwsers, setAllowAnswers] = useState(false);
    const STATIC_NUMBER=30;
    const [countdown, setCountdown] = useState(STATIC_NUMBER);
    useEffect(() => {
        if (!startExample || finished) return;
        if (countdown<=20)
            setAllowAnswers(true)
        if (countdown<=0)
            continueQuestion()
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown, startExample]);
    useEffect(() => {
        const list = posts.slice(0, 2).map((item) => {
            const answers = [];
            const tmpArray = item?.body?.split(" ")
            answers.push({title: capitalize(tmpArray?.[0]), key: 'a', selected: false})
            answers.push({title: capitalize(tmpArray?.[1]), key: 'b', selected: false})
            answers.push({title: capitalize(tmpArray?.[2]), key: 'c', selected: false})
            answers.push({title: capitalize(tmpArray?.[3]), key: 'd', selected: false})
            return {id: item?.id, question: capitalize(item?.body), answers}
        });
        setQuestions(list);
    }, [posts])

    useEffect(() => {
        let num = activeQuestionId + 1;
        setShowId(num)
        if (activeQuestionId > 0 && activeQuestionId >= questions?.length)
            setFinished(true)
    }, [activeQuestionId])

    const selectAnswer = ({questionId, answerKey}) => {
        let list = questions;
        list.forEach((item) => {
            if (item?.id === questionId) {
                item?.answers?.forEach((aItem) => {
                    aItem.selected = false;
                    if (aItem?.key === answerKey)
                        aItem.selected = true;
                })
            }
        })
        setQuestions(list);
    }

    const continueQuestion = () => {
        if (radioRefs.current)
            radioRefs.current.forEach((ref) => {
                if (ref) ref.checked = false;
            });
        let num = activeQuestionId + 1;
        setActiveQuestionId(num);
        setAllowAnswers(false)
        setCountdown(STATIC_NUMBER);
    }

    return (
        <div className={'container mx-auto pt-10'}>
            {startExample ? <div>
                {!finished ?
                    <div>
                        <div className="text-center bg-gray-200 text-5xl font-bold py-4 px-6 rounded-md shadow-lg">
                            {countdown}
                        </div>
                        {questions?.[activeQuestionId] ? (
                            <div className="flex flex-col bg-white rounded-lg shadow-md p-6 mb-8">
                                <div className="mb-4">
                                    <h1 className="text-2xl font-bold text-gray-800">
                                        <span className="text-blue-600">{showId}. </span>
                                        {questions?.[activeQuestionId]?.question}?
                                    </h1>
                                </div>
                                <div className="space-y-4 mb-6">
                                    {questions?.[activeQuestionId]?.answers?.map((aItem, aKey) => {
                                        return (
                                            <label
                                                key={aKey}
                                                className={`flex items-center space-x-3 p-3 border rounded-lg border-gray-200 hover:bg-gray-50 cursor-pointer ${!allowAnwsers ? 'opacity-90 cursor-not-allowed' : ''}`}
                                                onClick={() => {
                                                    selectAnswer({
                                                        questionId: questions?.[activeQuestionId]?.id,
                                                        answerKey: aItem.key
                                                    });
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="choice"
                                                    className="h-4 w-4 text-blue-600"
                                                    ref={(el) => (radioRefs.current[aKey] = el)}
                                                    disabled={!allowAnwsers}
                                                />
                                                <span className="text-gray-700">{aItem.title}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                                <div className={`flex justify-between w-full max-w-xs `}>
                                    <button
                                        className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 ${!allowAnwsers ? 'opacity-90 cursor-not-allowed' : ''}`}
                                        onClick={() => {
                                            continueQuestion();
                                        }}
                                        disabled={!allowAnwsers}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-700">Loading...</div>
                        )}
                    </div> : <></>}
                {finished ? <div>
                    <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-800 font-semibold">Question</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-800 font-semibold">Selected
                                Answer
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {questions?.map((item, key) => {
                            return (
                                <tr key={key} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b border-gray-200 text-gray-700">{item.question}</td>
                                    <td className="px-4 py-2 border-b border-gray-200 text-gray-700">{item?.answers?.find(a => a.selected)?.title || 'No answer selected'}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div> : <div></div>}

            </div> : <div>
                <button
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    onClick={() => {
                        setStartExample(true)
                    }}
                >
                    Start
                </button>
            </div>}
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
}

const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replaceAll("\n", " ");
}
