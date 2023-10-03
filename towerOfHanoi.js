function towerOfHanoi(n, sourceRod, auxiliaryRod, targetRod) {
  if (n === 1) {
    // If there's only one disk, move it from the source to the target rod.
    console.log(`Move disk 1 from ${sourceRod} to ${targetRod}`);
    return;
  }

  // Move n-1 disks from the source rod to the auxiliary rod using the target rod as the auxiliary.
  towerOfHanoi(n - 1, sourceRod, targetRod, auxiliaryRod);

  // Move the nth disk from the source rod to the target rod.
  console.log(`Move disk ${n} from ${sourceRod} to ${targetRod}`);

  // Move the n-1 disks from the auxiliary rod to the target rod using the source rod as the auxiliary.
  towerOfHanoi(n - 1, auxiliaryRod, sourceRod, targetRod);
}

// Usage:
const numberOfDisks = 3; // Change this to the desired number of disks.
towerOfHanoi(numberOfDisks, 'A', 'B', 'C');
