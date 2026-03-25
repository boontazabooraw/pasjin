function shuffle(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

export const generatePassword = async (req, res) => {
    try {
        const length = parseInt(req.query.length, 10) || 8;
        const symbols = req.query.symbols === 'true';
        const numbers = req.query.numbers === 'true';

        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const syms = '!@#$%^&*()';

        let requiredChars = [];
        let charset = lowercase + uppercase;

        requiredChars.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
        requiredChars.push(uppercase[Math.floor(Math.random() * uppercase.length)]);

        if (numbers) {
            requiredChars.push(nums[Math.floor(Math.random() * nums.length)]);
            charset += nums;
        }

        if (symbols) {
            requiredChars.push(syms[Math.floor(Math.random() * syms.length)]);
            charset += syms;
        }

        if (length < requiredChars.length) {
            throw new Error(`Password length must be at least ${requiredChars.length}.`)
        }

        while (requiredChars.length < length) {
            requiredChars.push(charset[Math.floor(Math.random() * charset.length)]);
        }

        let password = requiredChars.join('');

        // for (let i = 0; i < length; i++) {
        //     password += charset.charAt(Math.floor(Math.random() * charset.length));
        // }

        for (let i = 0; i < password.length; i++) {
            password = shuffle(password);
        }
        
        res.status(200).json({ password });
    } catch (e) {
        console.error(`Error: ${e}`);
        res.status(500).json({
            error: e.message,
        })
    }
}