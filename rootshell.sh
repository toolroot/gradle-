$ cat 1.sh 
id 
sudo -s <<EOF
echo Now i am root
id
echo "yes!"
EOF

$ bash 1.sh
uid=1000(igor) gid=1000(igor) groups=1000(igor),29(audio),44(video),124(fuse)
Now i am root
uid=0(root) gid=0(root) groups=0(root)
yes!
