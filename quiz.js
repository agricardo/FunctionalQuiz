const workers = [{
        name: "DiegoVega",
        hourlyRate: 8.25,
        hoursWorked: 80
    },
    {
        name: "PedroRios",
        hourlyRate: 9.15,
        hoursWorked: 40
    },
    {
        name: "YuliaRivera",
        hourlyRate: 6.65,
        hoursWorked: 20
    },
]
class Payroll {
    constructor(workers) {
        this.workers = workers
        this.names = this.getNames()
    }
    getNames() {
        newArray = this.workers.map(function (work) {
        return newArray.sort()
           
        })
    }
    getFullTime() {
        return this.workers.filter((timeWork) => {
            return (timeWork.hursWorked > 60) ? true : false
        })
    }

}