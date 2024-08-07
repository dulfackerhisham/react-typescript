type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
};

const Greet = (props: GreetProps) => {
    return(
        <div>

            <h1>
            {
                props.isLoggedIn ? ` Hello ${props.name} , hows your day. Your date ${props.messageCount}` : 'welcome guest'
            }
                </h1>
        </div>
    )
}

export default Greet;