export default function MsgBox({ userName, textColor }) {
    // Define the styles object separately
    const styles = { color: textColor };

    return (
        <h1 style={styles}>
            Hello, {userName}
        </h1>
    );
}