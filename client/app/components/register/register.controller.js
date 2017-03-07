class RegisterController {
    constructor(auth, $state, $scope, validation) {
        "ngInject";

        let vm = this;

        vm.name = 'register';
        vm.auth = auth;
        vm.$state = $state;
        vm.user = {};

        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function (state) {
            return { abbrev: state };
        });

        vm.types = [
            {
                text: "Prospective Student",
                description: "You are someone who is looking into the possibility of coding bootcamps."
            },
            {
                text: "Student",
                description: "You are currently enrolled in a coding bootcamp."
            },
            {
                text: "Alumni",
                description: "You have graduated from a coding bootcamp"
            },
            {
                text: "Instructor",
                description: "You are an instructor or part of a coding bootcamp's faculty"
            },
            {
                text: "Employer",
                description: "You work at a company that is hiring"
            },
            {
                text: "Recruiter",
                description: "You are looking for potential employees"
            },
            {
                text: "Other",
                description: "None of these fit who you are"
            }
        ];

        vm.user.state = vm.states[0].abbrev;
        vm.user.type = '0';

        $scope.$watch('vm.user.type', (newVal, oldVal) => {
            if (newVal) {
                vm.user.userDesc = vm.types[newVal].description;
            }
        });

        $scope.$watch('vm.user.username', (newVal, oldVal) => {

        });
    }

    register() {
        let vm = this;
        vm.user.userType = JSON.parse(vm.user.type).text;

        this.auth.register(this.user).then(response =>{
            vm.$state.transitionTo('home');
        });
    }
}

export default RegisterController;
