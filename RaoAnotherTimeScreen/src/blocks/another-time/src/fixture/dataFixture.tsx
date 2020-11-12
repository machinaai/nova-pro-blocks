import illustration from './illustration-notifications.svg';

export const dataFixture = {
    iconHeader: illustration,
    optionsBtn: {
        btn1: {
            title: `Title btn1`,
            type: 'button',
            action: () => {
                console.log('btn1');
            }
        },
        btn2: {
            title: `Title btn2`,
            color: 'purple',
            type: 'button',
            action: () => {
                console.log('btn2');
            }
        }
    }

}

