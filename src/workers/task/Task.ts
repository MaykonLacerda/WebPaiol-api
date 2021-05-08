class Task {

  private readonly taskTypes = ["Cortador", "Rasgador", "Prensador", "Tirador", "Aparador", "Empacotador", "Gerente"]

  type (task: number) {
    const taskType = this.taskTypes[task]

    return taskType
  }
}

export { Task }
