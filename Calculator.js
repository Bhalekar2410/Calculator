function clr()
{
document.getElementById("result").value=" ";
}
function display(val)
{
document.getElementById("result").value+=val;
}
function calculate()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;

}