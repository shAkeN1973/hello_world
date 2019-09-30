var person=
{
    firstName:'john',
    lastNamae:'Smith',
    switchName: function (x,y) {
        this.firstName=x;
        this.lastNamae=y;
    }
};

person.switchName('ma','boyu');
console.log(person.firstName,person.lastNamae);