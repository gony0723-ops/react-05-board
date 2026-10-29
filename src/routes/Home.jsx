//

import { useEffect, useState} from "react"
import styles from "./Home.modules.css/"

function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 과정인지 아닌지를 boolean으로 저장

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((rse) => {
          return res.json();
        })
        .then((json) => {
          setList(json);
          setLoading(false); // 데이터를 불러오는 작업이 다 끝난다는 의미로 loading을 false
        })
        .catch((err) => console.log(err));
    }, []);

    if (loading) {
      return <div className={styles.loading}>데이터를 로드 중입니다...</div>;
    }

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>커뮤니티 게시판</h1>
        <table className={styles.boardTable}>
            <thead>
            <tr>
                <th className={styles.idCell}>번호</th>
                <th>제목</th>
                <th>작성자 ID</th>
            </tr>
            </thead>
            <tbody>
            {list.map((item, index) => (
                <tr key={index} className={styles.tableRow}>
                    <td className={styles.idCall}>{item.id}</td>
                    <td className={styles.titleCell}>{item.title}</td>
                    <td className={styles.userIdCell}>{item.userId}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );