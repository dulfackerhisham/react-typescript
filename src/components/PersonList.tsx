type PersonListProps = {
    names: {
        fname: string,
        lname: string,
    }[]
}

const PersonList = (props: PersonListProps) => {
    return(
        <div>
            {props.names.map((name) => {
                return (
                    <h2 key={name.first}>{name.fname} {name.lname}</h2>
                )
            } )}
        </div>
    )
};

export default PersonList;