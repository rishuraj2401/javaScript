// all primitive(int, bool, var) datatype uses stack memory 
// all non-primitive(map, set, object) datatype uses heap memory


// stack memory me copy milta hai

var name1="Rishu"
var newName= name1;
newName="Rishu Raj Sinha" // yha newName ko jub naya value assign kiye hai to name1 ko assgin nhi hoga 
                        // kyunki newName me name2 ka copy assign hua tha


// heap memory me original data ka reference milta hai

var obj1={
    email:"abc"
}
var obj2=obj1;
obj2.email="cde";

console.log(obj1.email);//cde
console.log(obj2.email);//cde
                    //both become cde means obj1 and obj2 dono ek hi data ko point kr rhe hai, to ye tha heap memory ka concept;


