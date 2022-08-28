import React, {useEffect, useState} from "react"
const listOfModes = [
    'A',
    'Ab',
    'B',
    'Bb',
    'C',
    'D',
    'Db',
    'E',
    'Eb',
    'F',
    'G',
    'Gb'
]

export default function App() {
    const [randomizedModes, setRandomizedModes] = useState([])

    useEffect(() => {
        shuffle(listOfModes)
    }, [])

    function shuffle(array) {
        let tempArr = [...array]
        let currentIndex = tempArr.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [tempArr[currentIndex], tempArr[randomIndex]] = [
                tempArr[randomIndex], tempArr[currentIndex]];
        }

        setRandomizedModes(tempArr)
        console.log(randomizedModes)
    }

    return (
        <div className="min-h-screen bg-gray-800">
            <div className="w-[640px] mx-auto h-screen">
                <div className="grid grid-cols-4 gap-8 pt-16">
                    {
                        randomizedModes.map((mode, i) => {
                            return (
                                <div className="flex justify-center" key={i}>
                                    <div className="w-28 h-28 border-4 border-gray-500 flex items-center justify-center">
                                        <span className="text-6xl font-bold text-gray-200">
                                            {mode}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-8 px-4 flex justify-end">
                    <button className="border px-2 py-1 rounded text-gray-300 bg-gray-500" onClick={() => shuffle(listOfModes)}>
                        Shuffle
                    </button>
                </div>
            </div>
        </div>
    )
}