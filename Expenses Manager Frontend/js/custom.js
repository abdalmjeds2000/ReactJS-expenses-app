function formatRows(title, date, value, descrption) {
  // append to table
  // return "<tr> <td>Ahmed</td> <td>Mohammed</td> </tr>";
  return (
    "<tr><td > " +
    title +
    " </td>" +
    "<td >" +
    date +
    "</td>" +
    "<td >" +
    value +
    " <span>$</span></td>" +
    '<td colspan="2">' +
    descrption +
    "</td>" +
    '<td class="text-right"><a href="#" class="delete" onClick="deleteRow(this)">' +
    '<i class="fa fa-trash-o" aria-hidden="true"></a></td></tr>'
  );
}

var sum = 0;
function deleteRow(trash) {
  $(trash).closest("tr").remove();
}

function addRow() {
  var title = $(".addTitle").val();
  var date = $(".addDate").val();
  var value = $(".addValue").val();
  var descrption = $(".addDescrption").val();
  $(formatRows(title, date, value, descrption)).insertAfter("#addRow");
}

$(".addBtn").click(function () {
  // // for total
  //  $(".addValue").each(function(){
  //        sum += +$(this).val();
  //    });
  //    $(".sum-total").html(sum);
  // add row
  addRow();
});
