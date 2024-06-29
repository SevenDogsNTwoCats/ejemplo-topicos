# ejecutar comentario hola mundo
# echo "hola mundo"

#ejecutar el comando docker ps
# docker ps

#ejecutar neofetch
# neofetch --disable cpu gpu memory kernel

#echo "hola $1 $2"

edad=$1

if [ $edad -ge 18 ]; then
    echo "Eres mayor de edad"
else
    echo "Eres menor de edad"
fi

for i in {1..5}; do
    echo "Número: $i"
done

contador=$2

while [ $contador -le 5 ]; do
    echo "Contador: $contador"
    ((contador++))
done
