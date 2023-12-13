package Kursovaya_Rabota_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Материал
 */
@Entity(name = "IISKursovaya_Rabota_2Материал")
@Table(schema = "public", name = "Материал")
public class Material {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Вид")
    private String вид;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Disciplina")
    @Convert("Disciplina")
    @Column(name = "Дисциплина", length = 16, unique = true, nullable = false)
    private UUID _disciplinaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Disciplina", insertable = false, updatable = false)
    private Disciplina disciplina;


    public Material() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getВид() {
      return вид;
    }

    public void setВид(String вид) {
      this.вид = вид;
    }


}