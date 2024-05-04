class Observer {
    events = {}

    subscribe(eName, fn) {
        this.events[eName] = this.events[eName] || []
        this.events[eName].push(fn)
    }

    unsubscribe(eName, fn) {
        if (!(eName in this.events)) return
        this.events[eName] = this.events[eName].filter((f) => f !== fn)
    }

    publish(eName, data) {
        if (!(eName in this.events)) return
        this.events[eName].forEach((fn) => {
            fn(data)
        })
    }
}

const observer = new Observer()

export default observer
