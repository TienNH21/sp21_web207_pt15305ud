function Student({ data }) {

  const listSubject = data.subjects
    .map(function (value, index) {
      const element = (
        <li key={index}>
          { value.code } - { value.name }
        </li>
      );

      return element;
    });

  const element = (
    <ul>
      <li>Họ Tên: { data.name }</li>
      <li>Ngày Sinh: { data.birthday }</li>
      <li>Địa chỉ: { data.address }</li>
      <li>
        Trạng thái: {
          data.graduated == true ?
            'Đã Tốt Nghiệp' :
            'Chưa Tốt Nghiệp'
        }
      </li>
      <li>Môn học:
        <ul>
          { listSubject }
        </ul>
      </li>
    </ul>
  );

  return element;
}

export default Student;
