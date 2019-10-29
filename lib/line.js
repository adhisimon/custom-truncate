module.exports = (str, maxChars) => {
    if (!str || typeof str !== 'string' || !str.length) {
        return ['', ''];
    }

    const lines = str.split(/\n/);
    const linesCount = lines.length;
    if (!linesCount) {
        if (str.length >= maxChars) return ['', str];
        return [str, ''];
    }

    let head = '';
    for (let i = 0; i < linesCount; i += 1) {
        let newHead = head;
        if (newHead.length) newHead += '\n';
        newHead += lines[i].trim();

        if (newHead.length > maxChars) {
            const tail = lines.splice(i).join('\n').trim();

            /*
            console.log('HEAD:', head);
            console.log('NEW HEAD:', newHead);
            console.log('TAIL:', tail);
            console.log(`I: ${i}`);
            console.log(`Lines count: ${linesCount}`);
            console.log();
            */

            return [head, tail];
        }

        head = newHead;
    }

    return [head, ''];
};
