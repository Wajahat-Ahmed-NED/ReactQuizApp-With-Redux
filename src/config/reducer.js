const INITIAL_STATE={
    userName:'wajahat ahmed',
    questions:[
        {
            question: "HTML Stands For ?",
            ans: ["HyperTextMarkUp Language", "Wrong", "Wrong", "Wrong"],
            correctAns: "HyperTextMarkUp Language"
        },
        {
            question: "CSS Stands For ?",
            ans: ["Cascading Style Sheet", "Wrong", "Wrong", "Wrong"],
            correctAns: "Cascading Style Sheet"
        },
        {
            question: "HTML Stands For ?",
            ans: ["HyperTextMarkUp Language", "Wrong", "Wrong", "Wrong"],
            correctAns: "HyperTextMarkUp Language"
        },
        {
            question: "HTML Stands For ?",
            ans: ["HyperTextMarkUp Language", "Wrong", "Wrong", "Wrong"],
            correctAns: "HyperTextMarkUp Language"
        }
]

}

const reducer=(state=INITIAL_STATE)=>state;

export default reducer