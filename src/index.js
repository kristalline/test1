const genDiff = (coll1, coll2) => {
        let result = '';
        const tempArr = [];
        const keyColl1 = Object.keys(coll1);
        const keyColl2 = Object.keys(coll2);

        keyColl1.map(key => {
            if (Object.hasOwn(coll2, key)) {
                const temp = coll1[key] === coll2[key] ? [`  ${key}: ${coll1[key]}`] : [`- ${key}: ${coll1[key]}`, `+ ${key}: ${coll2[key]}`]; //'unchanged' : 'changed';
                temp.map(item => {
                    result = `${result}\n${item}`
                });
            } else {
                result = `${result}\n- ${key}: ${coll1[key]}` //deleted
            }
            tempArr.push(key);
        });

        keyColl2.filter(key => tempArr.indexOf(key) === -1).map(key => result = `${result}\n+ ${key}: ${coll2[key]}`); //added
        return `{${result}\n}`;    
}

export default genDiff;