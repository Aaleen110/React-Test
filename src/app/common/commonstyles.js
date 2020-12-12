import Colors from '../utils/colors'
const commonstyles = {
    container: {
        flex: 1,
        height: '100vh',
        width: '100vh',
        backgroundColor: '#666',
    },

    button_container: {
        height: 40,
        width: null,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },

    selected_header: {
        color: '#333',
        fontWeight: 'bold'
    },

    unselected_header: {
        color: 'grey',
        fontWeight: 'bold'
    },

    iconStyle: {
        height: 18,
        width: 18,
        marginRight: 8,
        marginLeft: 8
    },

    formGroup: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    },

    formLabel: {
        fontWeight: 'bold',
        color: Colors.newBlack,
        paddingRight: 16,
        width: '16%'
    },

    formControl: {
        boxShadow: 'none',
        outline: 'none',
        borderColor: '#ccc',
        backgroundColor: Colors.newBackground,
        width: '100%'
    }
}

export default commonstyles;