import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

export const global = StyleSheet.create({
        content: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: 566,
        },
        h2: {
            fontSize: 15,
            fontWeight: 'bold',
        },
        h3: {
            fontSize: 12,
        },
        h4: {
           fontSize: 10,
           fontWeight: '400',
        },
        box: {
            display: 'flex',
            flexDirection: 'column',
            borderWidth: 1,
            borderColor: '#bbb8b6',
            borderStyle: 'solid',
            width: 300,
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 15,
        },
        redText: {
            color: '#f90808',
        },
        greenText: {
            color: '#09f72a',
        },
        bold: {
            fontWeight: 'bold',
        }
    }
)