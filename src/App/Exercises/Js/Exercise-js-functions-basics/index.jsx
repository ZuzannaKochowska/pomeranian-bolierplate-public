import './styles.css';

export function Exercise() {
  const a = 2;
  const b = 3;
  //declaration types - 1
  function multiplyTypeFunction() {
    return a*b
  }}

  const multiplyTypeArrowFunction = () => {
    return a * b
  };
 // lambda
 const_ multiplyTypeArrowFunction_lambda = () => a * b;

  const filterHelper = (num) => {
    return num => 3
  }

  const array_anonymous_function_with_declaration = [1,2,3].filter((num) => num >= 3)
  const array_function_with_declaration = [1,2,3].filter((num) => filterHelper(num))

  function outsideFunction() {
    function insideFunction() {
      console.log('test');

      return insideFunction
    }
  }

  outsideFunction();

  return (
    <div> 
      {/* {Deklaracje funkcji} */}
      <div>{multiplyTypeFunction(a,b)}</div>
      <div> {multiplyTypeArrowFunction(a,b)}</div>
      {/* {Wywołanie funkcji anonimowej - nie deklarujemy} */}
      <div> 
        {() => {
        return a*b;
        }
      </div>
    </div>
  )
      
  