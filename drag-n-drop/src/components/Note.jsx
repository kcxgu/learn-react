import { useDrag } from "react-dnd"

const Note = ({ note, binnedItems }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "note",
        item: { name: note },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You threw ${item.name} into ${dropResult.name}`)
                let tempList = binnedItems;
                tempList.push(item.name);
                localStorage.setItem("binnedItems", JSON.stringify(tempList));
                window.location.reload();
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }), [],)

    return (
        <div ref={drag}>{note}</div>
    )
}

export default Note