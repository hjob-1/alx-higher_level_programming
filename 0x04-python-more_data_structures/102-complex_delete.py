#!/usr/bin/python3
def complex_delete(dict_1, value):
    tmp = dict_1.copy()
    for k, v in tmp.items():
        if value == v:
            dict_1.pop(k)
    return dict_1
