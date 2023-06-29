export const playSound = (soundPath: string): void => {
    const audio = new Audio(soundPath);
    audio.play();
};