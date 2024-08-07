type GreetProps = {
    name: string
};

const Greet = (props: GreetProps) => {
    return(
        <div>
            <h1>Hello {props.name} , how's your day</h1>
        </div>
    )
}

export default Greet;