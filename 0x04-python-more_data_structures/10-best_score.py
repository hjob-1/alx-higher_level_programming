#!/usr/bin/python3
def best_score(dict_1):
    return max(dict_1, key=dict_1.get) if dict_1 else None
