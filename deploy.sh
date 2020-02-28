echo "deploying"

cp -R /Users/jackkenlay/personal/ruqsana-begum-react/build/* /Users/jackkenlay/personal/ruqsana-begum-react-dist/

git --git-dir="/Users/jackkenlay/personal/ruqsana-begum-react-dist/.git" status

git --git-dir="/Users/jackkenlay/personal/ruqsana-begum-react-dist/.git" add -A

git --git-dir="/Users/jackkenlay/personal/ruqsana-begum-react-dist/.git" commit -m "Deploy"

git --git-dir="/Users/jackkenlay/personal/ruqsana-begum-react-dist/.git" push
