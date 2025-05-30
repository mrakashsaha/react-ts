export interface Props {
    name: string,
    age: number,
    isMarried: boolean,

}

export const Person = (props: Props) => {

    return(
        <>
            <div>
                <h2>Person</h2>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>This person is : {props.isMarried ? "Married" : "Single "}</p>
            </div>
        </>
    )
}