import { useDrop } from "react-dnd";

const Bin = ({ binnedItems }) => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "note",
        drop: () => ({ name: "the bin" }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }), [],)

    return (
        <div className='border h-48' ref={drop}>
            <h2 className='text-center font-medium py-2'>Bin</h2>
            {binnedItems.map((item, i) =>
                <div key={i}>
                    <p>{item}</p>
                </div>
            )}
        </div>
    )
}

export default Bin