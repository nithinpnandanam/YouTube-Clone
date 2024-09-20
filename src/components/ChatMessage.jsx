const chatMessage = (props) =>{
    const {name,comment} = props.details
    return(
        <div className="flex items-center">
            <p className="w-[5rem] pl-[8px]">{name}</p>
            <p>{comment}</p>
        </div>
    )
}
export default chatMessage