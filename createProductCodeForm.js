function createProductCodeForm(parent) {
  var form = $("<form/>");

  form.append($("<label>").text('Product Code:'));
  form.append($("<input>").attr('name', 'productCode').attr('type', 'text').on({
    
    focus:function()
    {
      form.append($("<label>").attr('name', 'hint').text('The product code can be found on the label.'));
    },
    blur:function()
    {
      $("[name='hint']").hide();
    }
  }));


  form.append('<br>');

  form.append($("<input>").attr('type', 'submit'));

  parent.append(form);
}