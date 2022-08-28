## FUNÇÃO CRIADA PARA O DESAFIO PYTON

s1 = '{[()]}'
s2 = '{[(])}'
s3 = '{{[[(())]]}}'
def verifica(string):
  template = {
      "(": ")",
      "[": "]",
      "{": "}",
  }
  if len(string) % 2 == 0:
    is_valid = False
    string_list = [l for l in string]
    n = (len(string_list) / 2)
    n = int(n)
    lista_aberta = string_list[0: n]
    lista_fechada = string_list[n:]
    lista_fechada = [lista_fechada[position] for position in range(len(lista_fechada)-1, -1, -1)]
    for caracter in range(0, n):
      if template[lista_aberta[caracter]] == lista_fechada[caracter]:
        is_valid = True
      else:
        is_valid = False
    if is_valid:
      return 'YES'
    else:
      return 'NO'
  else:
    return 'NO'