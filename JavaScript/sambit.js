function validate(){
    var frm=document.ufrm;
    if(frm.txtuser.value.trim()=="")
    {
        alert("Please Enter the Name");
        frm.txtuser.focus();
        return;
    }
    if(frm.upass.value.trim()=="")
    {
        alert("Please enter the Password");
        frm.upass.focus();
        return;
    }
    if(frm.udate.value=="")
    {
        alert("Enter the Date Of Birth");
        frm.udate.focus();
        return;
    }
    if(frm.uphone.value.trim()=="")
    {
        alert("Enter the Mobile Number");
        frm.uphone.focus();
        return;
    }
    if(frm.uage.value < 18 || frm.uage.value >35)
    {
        alert("You are not eligible for the job");
        frm.uage.focus();
        return;
    }
    frm.submit();
}