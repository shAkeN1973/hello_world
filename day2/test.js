var person=
{
    firstName:'john',
    lastName:'Smith',
    switchName: function (x,y) {
        this.firstName=x;
        this.lastName=y;
    }
};

person.switchName('ma','boyu');
console.log(person.firstName,person.lastName);