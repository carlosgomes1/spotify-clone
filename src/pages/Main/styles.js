import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 16,
        backgroundColor: '#131313'
    },

    settings: {
        position: 'absolute',
        right: 0
    },

    headerTitle: {
        color: "#FFF",
        paddingVertical: 26,
        fontSize: 24,
        fontWeight: 'bold'
    },

    boaTardeList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    boaTardeItem: {
        backgroundColor: '#363634',
        width: '48%',
        borderRadius: 6,
        marginBottom: 8,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },

    boaTardeItemImagens: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '45%'
    },

    boaTardeItemImage: {
        width: 32,
        height: 30,
    },

    boaTardeItemTitle: {
        color: '#FFF',
        fontWeight: 'bold',
    },

    tocadasRecentementeItem: {
        width: 120,
        height: 140,
        justifyContent: 'space-between',

        marginRight: 10,
    },

    tocadasRecentementeItemImagens: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    tocadasRecentementeItemImage: {
        width: 60,
        height: 60
    },

    tocadasRecentementeItemText: {
        color: 'white'
    }
})