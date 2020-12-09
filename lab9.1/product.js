angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'B 01',name:'The Wanted',price:399,quantity:240},
        {id:'B 02',name:'Pilgrim',price:450,quantity:2440},
        {id:'B 03',name:'Last Battle',price:250,quantity:1240},
        {id:'B 04',name:'Stolen',price:300,quantity:4000}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProducts[index].name=$scope.name;
        $scope.listProducts[index].price=$scope.price;
        $scope.listProducts[index].quantity=$scope.quantity;
    }
    $scope.add=function()
    {
        $scope.listProducts.push({
            id:$scope.id,name:$scope.name,price:$scope.price,quantity:$scope.quantity
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listProducts.length;i++)
        if($scope.listProducts[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProducts[index];
        $scope.id=product.id;
        $scope.name=product.name;
        $scope.price=product.price;
        $scope.quantity=product.quantity;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProducts.splice(index,1);
        }
    };
});