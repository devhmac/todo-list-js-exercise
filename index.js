function newTask(title, desciption) {
  const task = {
    title: title,
    desciption: desciption,
    complete: false,
    markCompleted: function () {
      this.complete = true;
    },

    logStatus: function () {
      console.log(`${this.title} has ${this.complete ? '' : ' not '}been completed.`)
    }

  }
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take tha poopoo out the box"); // task 0
const task2 = newTask("Do Laundry", "ugh"); // task 1
const tasks = [task1, task2]

task1.logStatus()
task1.markCompleted()
task1.logStatus()

//console.log(tasks)
