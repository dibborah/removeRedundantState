// eslint-disable-next-line react/prop-types
const ShowCountValue = ({count}) => {
    console.log(count);

    // props.count = 10000 // WARNING: Can assign to readonly props object
    // In the above line error was thrown as props object are only readonly and never mutable

    // eslint-disable-next-line react/prop-types
    // let {count} = props

    // eslint-disable-next-line react/prop-types
    // let count = props.count;
    count = 100000;// This line does not throws error as count is a variable and so can be changed and is mutable
    // But in react never ever change the values of props
    // The props won't be dynamically render in the UI from there on !!!
    // The entire application's performance would be broken if one mutates an prop

    // Khudh se props kabhi v change nhi karna
    // Never ever do that !!!
    // Change ho jaengee par REACT new state or existing state kabhi v UI main show nhi kar paegi
    // Which destroys the purpose of using REACT at all

    // PROPS IMMUTABLE HAIN PAR VARIABLE TO IMMUTABLE NHI HAIN NA
    // ISILIYE HUM PROPS KO DESTRUCTURE KAR KE MUTATE KAR SKTE HAIN
    // B/C destructure ke baad properties inside props are just like VARIABLES
    // And VARIABLES are mutable
    // lekin destructured props ko mutate karna nhi chahiye
  return <span>{count}</span>;
};

export default ShowCountValue;
