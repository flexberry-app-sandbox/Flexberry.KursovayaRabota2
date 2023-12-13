package Kursovaya_Rabota_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СпрСтуд
 */
@Entity(name = "IISKursovaya_Rabota_2СпрСтуд")
@Table(schema = "public", name = "СпрСтуд")
public class SprStud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фио")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gruppa")
    @Convert("Gruppa")
    @Column(name = "Группа", length = 16, unique = true, nullable = false)
    private UUID _gruppaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gruppa", insertable = false, updatable = false)
    private Gruppa gruppa;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Disciplina")
    @Convert("Disciplina")
    @Column(name = "Дисциплина", length = 16, unique = true, nullable = false)
    private UUID _disciplinaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Disciplina", insertable = false, updatable = false)
    private Disciplina disciplina;


    public SprStud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФио() {
      return фио;
    }

    public void setФио(String фио) {
      this.фио = фио;
    }


}