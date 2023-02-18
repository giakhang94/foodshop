function TextDisplay({ text = '', limit = 50 }) {
    let newText = '';
    if (text.length > limit) {
        newText = text.slice(0, limit - 5) + '... ';
    } else {
        newText = text;
    }
    return <>{newText}</>;
}

export default TextDisplay;
