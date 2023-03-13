import { useRef } from "react"

function BoxInput() {
    // let ref = useRef(0)
    const refInput = useRef(null)

    const handleClick = () => {
        console.log('ref variabel', refInput);
        // ref.current = ref.current + 1;
        // alert('You Click' + ref.current + 'Times!')
        refInput.current.focus();

    }

    return (
        <div>
            <input ref={refInput} />
            <button onClick={handleClick}>Clikme</button>
        </div>
    )
}

export default BoxInput
