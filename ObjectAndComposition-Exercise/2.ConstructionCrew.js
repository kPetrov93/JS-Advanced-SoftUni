function print(worker) {
    
    if (worker.dizziness) {
        worker.levelOfHydrated += Number(0.1 * worker.weight * worker.experience);
        worker.dizziness = false;
    }

    return worker;
}
print({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)